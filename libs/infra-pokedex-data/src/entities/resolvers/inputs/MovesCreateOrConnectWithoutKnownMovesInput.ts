import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutKnownMovesInput } from "../inputs/MovesCreateWithoutKnownMovesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutKnownMovesInput", {})
export class MovesCreateOrConnectWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutKnownMovesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutKnownMovesInput;
}
