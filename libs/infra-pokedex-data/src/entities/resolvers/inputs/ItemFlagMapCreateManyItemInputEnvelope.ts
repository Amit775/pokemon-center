import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateManyItemInput } from "../inputs/ItemFlagMapCreateManyItemInput";

@TypeGraphQL.InputType("ItemFlagMapCreateManyItemInputEnvelope", {})
export class ItemFlagMapCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateManyItemInput], {
    nullable: false
  })
  data!: ItemFlagMapCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
