import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutNaturesInput } from "../inputs/TypesCreateWithoutNaturesInput";
import { TypesUpdateWithoutNaturesInput } from "../inputs/TypesUpdateWithoutNaturesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpsertWithWhereUniqueWithoutNaturesInput", {})
export class TypesUpsertWithWhereUniqueWithoutNaturesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutNaturesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutNaturesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutNaturesInput;
}
