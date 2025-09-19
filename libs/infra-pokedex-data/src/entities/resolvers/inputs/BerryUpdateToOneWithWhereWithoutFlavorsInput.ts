import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateWithoutFlavorsInput } from "../inputs/BerryUpdateWithoutFlavorsInput";
import { BerryWhereInput } from "../inputs/BerryWhereInput";

@TypeGraphQL.InputType("BerryUpdateToOneWithWhereWithoutFlavorsInput", {})
export class BerryUpdateToOneWithWhereWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  where?: BerryWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutFlavorsInput, {
    nullable: false
  })
  data!: BerryUpdateWithoutFlavorsInput;
}
