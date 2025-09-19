import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutGenerationInput } from "../inputs/TypeCreateWithoutGenerationInput";
import { TypeUpdateWithoutGenerationInput } from "../inputs/TypeUpdateWithoutGenerationInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpsertWithWhereUniqueWithoutGenerationInput", {})
export class TypeUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: TypeCreateWithoutGenerationInput;
}
