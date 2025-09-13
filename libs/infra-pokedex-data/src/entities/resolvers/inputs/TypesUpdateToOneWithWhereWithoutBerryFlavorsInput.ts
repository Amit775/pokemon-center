import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutBerryFlavorsInput } from "../inputs/TypesUpdateWithoutBerryFlavorsInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutBerryFlavorsInput", {})
export class TypesUpdateToOneWithWhereWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutBerryFlavorsInput;
}
