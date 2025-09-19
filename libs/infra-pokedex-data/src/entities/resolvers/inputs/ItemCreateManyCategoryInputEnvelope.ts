import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateManyCategoryInput } from "../inputs/ItemCreateManyCategoryInput";

@TypeGraphQL.InputType("ItemCreateManyCategoryInputEnvelope", {})
export class ItemCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemCreateManyCategoryInput], {
    nullable: false
  })
  data!: ItemCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
