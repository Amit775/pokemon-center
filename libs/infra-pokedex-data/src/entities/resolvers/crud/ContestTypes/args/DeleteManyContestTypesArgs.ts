import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesWhereInput } from "../../../inputs/ContestTypesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;
}
