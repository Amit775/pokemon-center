import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexCreateManyItemInput } from "../inputs/ItemGameIndexCreateManyItemInput";

@TypeGraphQL.InputType("ItemGameIndexCreateManyItemInputEnvelope", {})
export class ItemGameIndexCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemGameIndexCreateManyItemInput], {
    nullable: false
  })
  data!: ItemGameIndexCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
