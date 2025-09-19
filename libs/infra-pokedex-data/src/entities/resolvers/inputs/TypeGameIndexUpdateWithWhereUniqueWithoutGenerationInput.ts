import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexUpdateWithoutGenerationInput } from "../inputs/TypeGameIndexUpdateWithoutGenerationInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexUpdateWithWhereUniqueWithoutGenerationInput", {})
export class TypeGameIndexUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndexUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: TypeGameIndexUpdateWithoutGenerationInput;
}
