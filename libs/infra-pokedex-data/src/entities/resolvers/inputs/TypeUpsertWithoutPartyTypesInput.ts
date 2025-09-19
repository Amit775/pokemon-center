import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutPartyTypesInput } from "../inputs/TypeCreateWithoutPartyTypesInput";
import { TypeUpdateWithoutPartyTypesInput } from "../inputs/TypeUpdateWithoutPartyTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutPartyTypesInput", {})
export class TypeUpsertWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutPartyTypesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutPartyTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutPartyTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutPartyTypesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
