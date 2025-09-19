import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateWithoutTypeInput } from "../inputs/TypeGameIndexCreateWithoutTypeInput";
import { TypeGameIndexWhereUniqueInput } from "../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("TypeGameIndexCreateOrConnectWithoutTypeInput", {})
export class TypeGameIndexCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateWithoutTypeInput, {
    nullable: false
  })
  create!: TypeGameIndexCreateWithoutTypeInput;
}
