import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesCreateManyItemInput } from "../inputs/ItemGameIndicesCreateManyItemInput";

@TypeGraphQL.InputType("ItemGameIndicesCreateManyItemInputEnvelope", {})
export class ItemGameIndicesCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [ItemGameIndicesCreateManyItemInput], {
    nullable: false
  })
  data!: ItemGameIndicesCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
