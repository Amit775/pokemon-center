import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketCreateManyInput } from "../../../inputs/ItemPocketCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnItemPocketArgs {
  @TypeGraphQL.Field(_type => [ItemPocketCreateManyInput], {
    nullable: false
  })
  data!: ItemPocketCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
