import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsCreateManyInput } from "../../../inputs/ItemsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnItemsArgs {
  @TypeGraphQL.Field(_type => [ItemsCreateManyInput], {
    nullable: false
  })
  data!: ItemsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
