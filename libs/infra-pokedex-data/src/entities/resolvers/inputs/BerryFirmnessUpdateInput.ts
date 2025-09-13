import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateManyWithoutFirmnessNestedInput } from "../inputs/BerriesUpdateManyWithoutFirmnessNestedInput";

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

  @TypeGraphQL.Field(_type => BerriesUpdateManyWithoutFirmnessNestedInput, {
    nullable: true
  })
  berries?: BerriesUpdateManyWithoutFirmnessNestedInput | undefined;
}
