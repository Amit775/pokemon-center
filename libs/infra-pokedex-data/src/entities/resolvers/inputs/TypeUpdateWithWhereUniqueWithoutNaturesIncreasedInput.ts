import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutNaturesIncreasedInput } from "../inputs/TypeUpdateWithoutNaturesIncreasedInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateWithWhereUniqueWithoutNaturesIncreasedInput", {})
export class TypeUpdateWithWhereUniqueWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutNaturesIncreasedInput;
}
