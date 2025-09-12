import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnTypesDamageClassArgs } from "./args/CreateManyAndReturnTypesDamageClassArgs";
import { Generations } from "../../models/Generations";
import { MoveDamageClasses } from "../../models/MoveDamageClasses";

@TypeGraphQL.ObjectType("CreateManyAndReturnTypes", {})
export class CreateManyAndReturnTypes {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id!: number | null;

  @TypeGraphQL.Field(_type => Generations, {
    nullable: false
  })
  generation!: Generations;

  damageClass!: MoveDamageClasses | null;

  @TypeGraphQL.Field(_type => MoveDamageClasses, {
    name: "damageClass",
    nullable: true
  })
  getDamageClass(@TypeGraphQL.Root() root: CreateManyAndReturnTypes, @TypeGraphQL.Args() args: CreateManyAndReturnTypesDamageClassArgs): MoveDamageClasses | null {
    return root.damageClass;
  }
}
