import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateManyTypeInputEnvelope } from "../inputs/TypeGameIndexCreateManyTypeInputEnvelope";
import { TypeGameIndexCreateOrConnectWithoutTypeInput } from "../inputs/TypeGameIndexCreateOrConnectWithoutTypeInput";
import { TypeGameIndexCreateWithoutTypeInput } from "../inputs/TypeGameIndexCreateWithoutTypeInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexCreateNestedManyWithoutTypeInput", {})
export class TypeGameIndexCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateWithoutTypeInput], {
    nullable: true
  })
  create?: TypeGameIndexCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeGameIndexCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeGameIndexCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeGameIndexWhereUniqueInput[] | undefined;
}
