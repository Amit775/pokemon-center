import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsCreateManyInput } from "../../../inputs/ItemPocketsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemPocketsArgs {
  @TypeGraphQL.Field(_type => [ItemPocketsCreateManyInput], {
    nullable: false
  })
  data!: ItemPocketsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
