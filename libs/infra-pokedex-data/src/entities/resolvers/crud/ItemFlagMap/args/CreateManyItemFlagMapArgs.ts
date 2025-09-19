import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapCreateManyInput } from "../../../inputs/ItemFlagMapCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemFlagMapArgs {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateManyInput], {
    nullable: false
  })
  data!: ItemFlagMapCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
