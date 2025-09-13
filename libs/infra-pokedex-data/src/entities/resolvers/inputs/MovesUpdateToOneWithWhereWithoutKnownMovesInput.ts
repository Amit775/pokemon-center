import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutKnownMovesInput } from "../inputs/MovesUpdateWithoutKnownMovesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutKnownMovesInput", {})
export class MovesUpdateToOneWithWhereWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutKnownMovesInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutKnownMovesInput;
}
