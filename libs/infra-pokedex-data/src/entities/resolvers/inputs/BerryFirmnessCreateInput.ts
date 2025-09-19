import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateNestedManyWithoutFirmnessInput } from "../inputs/BerryCreateNestedManyWithoutFirmnessInput";

@TypeGraphQL.InputType("BerryFirmnessCreateInput", {})
export class BerryFirmnessCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => BerryCreateNestedManyWithoutFirmnessInput, {
    nullable: true
  })
  berries?: BerryCreateNestedManyWithoutFirmnessInput | undefined;
}
