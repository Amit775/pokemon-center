import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutTypeInput } from "../inputs/MovesCreateWithoutTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutTypeInput", {})
export class MovesCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: MovesCreateWithoutTypeInput;
}
