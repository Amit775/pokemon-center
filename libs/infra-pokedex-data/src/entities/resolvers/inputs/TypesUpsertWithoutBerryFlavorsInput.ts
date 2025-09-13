import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutBerryFlavorsInput } from "../inputs/TypesCreateWithoutBerryFlavorsInput";
import { TypesUpdateWithoutBerryFlavorsInput } from "../inputs/TypesUpdateWithoutBerryFlavorsInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutBerryFlavorsInput", {})
export class TypesUpsertWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: TypesCreateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
