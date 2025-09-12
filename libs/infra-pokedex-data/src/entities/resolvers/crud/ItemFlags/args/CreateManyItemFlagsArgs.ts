import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsCreateManyInput } from "../../../inputs/ItemFlagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemFlagsArgs {
  @TypeGraphQL.Field(_type => [ItemFlagsCreateManyInput], {
    nullable: false
  })
  data!: ItemFlagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
