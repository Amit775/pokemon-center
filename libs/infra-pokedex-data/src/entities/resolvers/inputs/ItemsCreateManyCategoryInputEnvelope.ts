import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateManyCategoryInput } from "../inputs/ItemsCreateManyCategoryInput";

@TypeGraphQL.InputType("ItemsCreateManyCategoryInputEnvelope", {})
export class ItemsCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemsCreateManyCategoryInput], {
    nullable: false
  })
  data!: ItemsCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
