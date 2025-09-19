import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutNaturesInput } from "../inputs/TypeCreateWithoutNaturesInput";
import { TypeUpdateWithoutNaturesInput } from "../inputs/TypeUpdateWithoutNaturesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpsertWithWhereUniqueWithoutNaturesInput", {})
export class TypeUpsertWithWhereUniqueWithoutNaturesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutNaturesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutNaturesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutNaturesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutNaturesInput;
}
