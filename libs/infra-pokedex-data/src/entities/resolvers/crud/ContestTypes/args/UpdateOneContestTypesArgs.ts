import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesUpdateInput } from "../../../inputs/ContestTypesUpdateInput";
import { ContestTypesWhereUniqueInput } from "../../../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesUpdateInput, {
    nullable: false
  })
  data!: ContestTypesUpdateInput;

  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypesWhereUniqueInput;
}
