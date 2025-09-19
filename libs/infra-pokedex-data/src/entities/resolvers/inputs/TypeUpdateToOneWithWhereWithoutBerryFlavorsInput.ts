import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutBerryFlavorsInput } from "../inputs/TypeUpdateWithoutBerryFlavorsInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutBerryFlavorsInput", {})
export class TypeUpdateToOneWithWhereWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutBerryFlavorsInput;
}
