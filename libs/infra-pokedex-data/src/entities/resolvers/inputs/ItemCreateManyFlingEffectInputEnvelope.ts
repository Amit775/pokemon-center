import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateManyFlingEffectInput } from "../inputs/ItemCreateManyFlingEffectInput";

@TypeGraphQL.InputType("ItemCreateManyFlingEffectInputEnvelope", {})
export class ItemCreateManyFlingEffectInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemCreateManyFlingEffectInput], {
    nullable: false
  })
  data!: ItemCreateManyFlingEffectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
