import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutBerryFlavorsInput } from "../inputs/TypeCreateWithoutBerryFlavorsInput";
import { TypeUpdateWithoutBerryFlavorsInput } from "../inputs/TypeUpdateWithoutBerryFlavorsInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutBerryFlavorsInput", {})
export class TypeUpsertWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: TypeCreateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
