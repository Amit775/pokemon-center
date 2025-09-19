import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatWhereInput } from "../../../inputs/StatWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStatArgs {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
