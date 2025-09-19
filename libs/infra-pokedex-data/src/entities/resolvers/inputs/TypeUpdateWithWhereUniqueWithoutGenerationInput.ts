import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutGenerationInput } from "../inputs/TypeUpdateWithoutGenerationInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateWithWhereUniqueWithoutGenerationInput", {})
export class TypeUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutGenerationInput;
}
