import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketWhereInput } from "../../../inputs/ItemPocketWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  where?: ItemPocketWhereInput | undefined;
}
