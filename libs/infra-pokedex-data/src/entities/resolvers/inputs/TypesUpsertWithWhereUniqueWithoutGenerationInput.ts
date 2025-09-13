import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutGenerationInput } from "../inputs/TypesCreateWithoutGenerationInput";
import { TypesUpdateWithoutGenerationInput } from "../inputs/TypesUpdateWithoutGenerationInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class TypesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: TypesCreateWithoutGenerationInput;
}
