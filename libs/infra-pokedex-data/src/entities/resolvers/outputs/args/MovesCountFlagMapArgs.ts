import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapWhereInput } from "../../inputs/MoveFlagMapWhereInput";

@TypeGraphQL.ArgsType()
export class MovesCountFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  where?: MoveFlagMapWhereInput | undefined;
}
