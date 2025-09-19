import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateWithoutGenerationInput } from "../inputs/TypeGameIndexCreateWithoutGenerationInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexCreateOrConnectWithoutGenerationInput", {})
export class TypeGameIndexCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: TypeGameIndexCreateWithoutGenerationInput;
}
