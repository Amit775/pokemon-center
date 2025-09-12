import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Moves } from "../models/Moves";
import { Types } from "../models/Types";
import { MoveDamageClassesCount } from "../resolvers/outputs/MoveDamageClassesCount";

@TypeGraphQL.ObjectType("MoveDamageClasses", {})
export class MoveDamageClasses {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  moves?: Moves[];

  types?: Types[];

  @TypeGraphQL.Field(_type => MoveDamageClassesCount, {
    nullable: true
  })
  _count?: MoveDamageClassesCount | null;
}
