import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsWhereInput } from "../../../inputs/MoveFlagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  where?: MoveFlagsWhereInput | undefined;
}
