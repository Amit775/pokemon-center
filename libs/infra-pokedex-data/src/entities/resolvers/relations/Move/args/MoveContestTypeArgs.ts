import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeWhereInput } from "../../../inputs/ContestTypeWhereInput";

@TypeGraphQL.ArgsType()
export class MoveContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;
}
