import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateManyGenerationInputEnvelope } from "../inputs/TypeGameIndexCreateManyGenerationInputEnvelope";
import { TypeGameIndexCreateOrConnectWithoutGenerationInput } from "../inputs/TypeGameIndexCreateOrConnectWithoutGenerationInput";
import { TypeGameIndexCreateWithoutGenerationInput } from "../inputs/TypeGameIndexCreateWithoutGenerationInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexCreateNestedManyWithoutGenerationInput", {})
export class TypeGameIndexCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: TypeGameIndexCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndexCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndexCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndexWhereUniqueInput[] | undefined;
}
