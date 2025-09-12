import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapCreateManyFlagInput } from "../inputs/ItemFlagMapCreateManyFlagInput";

@TypeGraphQL.InputType("ItemFlagMapCreateManyFlagInputEnvelope", {})
export class ItemFlagMapCreateManyFlagInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemFlagMapCreateManyFlagInput], {
    nullable: false
  })
  data!: ItemFlagMapCreateManyFlagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
