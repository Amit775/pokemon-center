import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutNaturesInput } from "../inputs/TypeUpdateWithoutNaturesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateWithWhereUniqueWithoutNaturesInput", {})
export class TypeUpdateWithWhereUniqueWithoutNaturesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutNaturesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutNaturesInput;
}
