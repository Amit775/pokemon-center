import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateManyWithoutFirmnessNestedInput } from "../inputs/BerryUpdateManyWithoutFirmnessNestedInput";

@TypeGraphQL.InputType("BerryFirmnessUpdateInput", {})
export class BerryFirmnessUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => BerryUpdateManyWithoutFirmnessNestedInput, {
    nullable: true
  })
  berries?: BerryUpdateManyWithoutFirmnessNestedInput | undefined;
}
