import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesUpdateManyMutationInput } from "../../../inputs/ContestTypesUpdateManyMutationInput";
import { ContestTypesWhereInput } from "../../../inputs/ContestTypesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestTypesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;
}
