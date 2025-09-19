import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeUpdateManyMutationInput } from "../../../inputs/ContestTypeUpdateManyMutationInput";
import { ContestTypeWhereInput } from "../../../inputs/ContestTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;
}
