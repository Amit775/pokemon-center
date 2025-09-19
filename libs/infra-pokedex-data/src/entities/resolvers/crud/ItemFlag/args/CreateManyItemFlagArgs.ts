import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagCreateManyInput } from "../../../inputs/ItemFlagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemFlagArgs {
  @TypeGraphQL.Field(_type => [ItemFlagCreateManyInput], {
    nullable: false
  })
  data!: ItemFlagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
