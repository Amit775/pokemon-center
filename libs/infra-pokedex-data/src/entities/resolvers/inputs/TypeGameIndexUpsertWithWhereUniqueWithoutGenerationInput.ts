import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateWithoutGenerationInput } from "../inputs/TypeGameIndexCreateWithoutGenerationInput";
import { TypeGameIndexUpdateWithoutGenerationInput } from "../inputs/TypeGameIndexUpdateWithoutGenerationInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexUpsertWithWhereUniqueWithoutGenerationInput", {})
export class TypeGameIndexUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndexUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: TypeGameIndexUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: TypeGameIndexCreateWithoutGenerationInput;
}
