import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateManyFlingEffectInput } from "../inputs/ItemsCreateManyFlingEffectInput";

@TypeGraphQL.InputType("ItemsCreateManyFlingEffectInputEnvelope", {})
export class ItemsCreateManyFlingEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemsCreateManyFlingEffectInput], {
    nullable: false
  })
  data!: ItemsCreateManyFlingEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
