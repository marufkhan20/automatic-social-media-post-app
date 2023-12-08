import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/shared/Loading";
import { useUpdateSubscriptionPlanMutation } from "../features/package/packageApi";

const Success = () => {
  const { userId, packageId } = useParams();

  const navigate = useNavigate();

  // send request to api
  const [updateSubscriptionPlan, { data, isLoading }] =
    useUpdateSubscriptionPlanMutation();

  useEffect(() => {
    if (!isLoading && data?.newSubscription?._id) {
      toast.success("Subscription Plan Update Successfully.");
      navigate("/dashboard");
    }
  }, [data, isLoading, navigate]);

  useEffect(() => {
    if (userId && packageId) {
      updateSubscriptionPlan({
        userId,
        packageId,
      });
    }
  }, [userId, packageId, updateSubscriptionPlan]);
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <div>
        <Loading type="secondary" />
        <p className="text-center text-xl font-medium">Please wait</p>
      </div>
    </div>
  );
};

export default Success;
