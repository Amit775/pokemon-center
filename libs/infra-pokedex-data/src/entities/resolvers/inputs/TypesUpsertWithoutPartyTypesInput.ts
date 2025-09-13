import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutPartyTypesInput } from "../inputs/TypesCreateWithoutPartyTypesInput";
import { TypesUpdateWithoutPartyTypesInput } from "../inputs/TypesUpdateWithoutPartyTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutPartyTypesInput", {})
export class TypesUpsertWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutPartyTypesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutPartyTypesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutPartyTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutPartyTypesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
