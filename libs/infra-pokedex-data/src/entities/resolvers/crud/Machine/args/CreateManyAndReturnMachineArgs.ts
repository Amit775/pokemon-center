import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineCreateManyInput } from "../../../inputs/MachineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMachineArgs {
  @TypeGraphQL.Field(_type => [MachineCreateManyInput], {
    nullable: false
  })
  data!: MachineCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
